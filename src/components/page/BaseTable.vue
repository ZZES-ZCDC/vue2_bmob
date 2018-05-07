<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i> 数据管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div> -->
            <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="FEvaluate" label="报修报价" sortable width="150">
                </el-table-column>
                <el-table-column prop="FHandlePerson" label="工单处理人员" sortable width="150">
                </el-table-column>
                <el-table-column prop="FHandleResults" label="处理结果" width="120">
                </el-table-column>
                <el-table-column prop="FId" label="用户tokenID" >
                </el-table-column>
                <el-table-column prop="FSerialNumber" label="报修序列号" sortable width="150">
                </el-table-column>
                <el-table-column prop="FServiceDate" label="报修日期" sortable width="150">
                </el-table-column>
                <el-table-column prop="FStatus" label="处理进度" width="120">
                </el-table-column>
                <el-table-column prop="wilsonsocre" label="wilsonsocre" >
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <!-- <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <!-- <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div> -->
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="50%">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="处理人">
                    <el-input v-model="form.FHandlePerson"></el-input>
                </el-form-item>
                <el-form-item label="处理进度">
                    <el-input v-model="form.FStatus"></el-input>
                </el-form-item>
                <el-form-item label="处理结果">
                    <el-input v-model="form.FHandleResults"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <!-- <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog> -->
    </div>
</template>

<script>
    import {request} from '../../util'
    export default {
        data() {
            return {
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                form: {
                    FStatus: '',
                    FServiceDate: '',
                    FSerialNumber: '',
                    FName: '',
                    FId: '',
                    FHandleResults: '',
                    FHandlePerson: '',
                    FEvaluate: '',
                    wilsonsocre: ''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        computed: {
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
 
            getData() {  
                request({
                    url:'https://api.bmob.cn/1/classes/kn',
                    method:'get'
                }).then((res) => {
                    // console.log(res.data.results)
                    this.tableData = res.data.results;
                })
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    FHandlePerson: item.FHandlePerson,
                    FStatus: item.FStatus,
                    FHandleResults: item.FHandleResults,
                    objectId:item.objectId
                }
                this.editVisible = true;
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
            delAll() {
                const length = this.multipleSelection.length;
                let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 保存编辑
            saveEdit() {
                // this.$set(this.tableData, this.idx, this.form);
                // console.log(this.form)
                request({
                    url:'https://api.bmob.cn/1/classes/kn/'+this.form.objectId,
                    method:'put',
                    data:{
                        FHandlePerson: this.form.FHandlePerson,
                        FStatus: this.form.FStatus,
                        FHandleResults: this.form.FHandleResults,
                    }
                }).then((res)=>{
                    if(res.statusText==='OK'){
                        this.getData()
                        this.editVisible = false;
                        this.$message.success(`修改第 ${this.idx+1} 行成功`);
                    }
                })
                
            },
            // 确定删除
            deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
</style>
