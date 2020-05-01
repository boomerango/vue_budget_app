<template>
    <div class="bottom">
        <div class="add">
            <div class="add__container">
                <form @submit.prevent="evaluateInput">
                    <select v-model="selected" class="add__type"  v-bind:class="{'red-focus':add}">
                        <option value="inc" selected>+</option>
                        <option value="exp">-</option>
                    </select>

                    <input type="text" required="true"  v-bind:class="{'red-focus':add}" v-model="textInp" class="add__description" placeholder="Add description">
                    <input  type="number" required="true" v-bind:class="{'red-focus':add}" v-model.number="valInp" class="add__value" placeholder="Value">

                    <button class="add__btn"  v-bind:class="{'red':add}" type="submit">
                        <BIconPlusCircle/>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { BIconPlusCircle } from 'bootstrap-vue'
    import { mapMutations,mapGetters } from 'vuex'
    export default {
        name: "InputTransactions",
        data:function(){
            return {
                selected:'inc',
                add:false,
                textInp:'',
                valInp:''
            }
            },
        watch:{
            selected:function(){
                if(this.selected==='exp'){
                    return this.add=true
                }else {
                    return this.add=false
                }
            }
        },
        components:{
            BIconPlusCircle
        },
        methods:{
            ...mapMutations([
                'addIncome',
                'removeIncome',
                'insertToList',
                'insertExpList'
            ]),
            evaluateInput:function(){
                let  user= {
                    text:this.textInp,
                    val:this.valInp
                }
                if(this.selected==='inc'){
                    this.addIncome(Number(this.valInp))
                    this.insertToList(user)
                }else{
                    this.removeIncome(Number(this.valInp))
                    this.insertExpList(user)
                }
                //this.textInp=''
               // this.valInp=''
            }
        },
        computed: {
            ...mapGetters([
                'resolveTotalExpObjext',
                'resolveTotalIncObject'
            ])
        }
    }
</script>

<style scoped>
    .right { float: right; }
    .red { color: #FF5049 !important; }
    .red-focus:focus { border: 1px solid #FF5049 !important; }

    .add {
        padding: 14px;
        border-bottom: 1px solid #e7e7e7;
        background-color: #f7f7f7;
    }

    .add__container {
        margin: 0 auto;
        text-align: center;
    }

    .add__type {
        width: 55px;
        border: 1px solid #e7e7e7;
        height: 44px;
        font-size: 18px;
        color: inherit;
        background-color: #fff;
        margin-right: 10px;
        font-weight: 300;
        transition: border 0.3s;
    }

    .add__description,
    .add__value {
        border: 1px solid #e7e7e7;
        background-color: #fff;
        color: inherit;
        font-family: inherit;
        font-size: 14px;
        padding: 12px 15px;
        margin-right: 10px;
        border-radius: 5px;
        transition: border 0.3s;
    }

    .add__description { width: 400px;}
    .add__value { width: 100px;}

    .add__btn {
        font-size: 35px;
        background: none;
        border: none;
        color: #28B9B5;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        line-height: 1.1;
        margin-left: 10px;
    }

    .add__btn:active { transform: translateY(2px); }

    .add__type:focus,
    .add__description:focus,
    .add__value:focus {
        outline: none;
        border: 1px solid #28B9B5;
    }
    .add__btn:focus { outline: none; }
</style>
