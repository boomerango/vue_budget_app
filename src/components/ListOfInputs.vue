<template>
<div class="bottom">
    <div class="container clearfix">
        <div class="income">
            <h2 class="icome__title">Income</h2>

            <div class="income__list" v-for="plItem in resolveTotalIncObject" v-bind:key="plItem.text">
                <div class="item clearfix">
                    <div class="item__description">{{plItem.text}}</div>
                    <div class="right clearfix">
                        <div class="item__value">+ {{plItem.val}}</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"  v-on:click="removeIncomeItem(plItem.text)">
                                <BIconXCircleFill/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="expenses">
            <h2 class="expenses__title">Expenses</h2>

            <div class="expenses__list" v-for="item in resolveTotalExpObjext" v-bind:key="item.text">
                <div class="item clearfix" >
                    <div class="item__description">{{item.text}}</div>
                    <div class="right clearfix">
                        <div class="item__value">- {{item.val}}</div>
                        <div class="item__percentage" v-if="totalIncome>0">{{((item.val/totalIncome)*100).toFixed(2)}}%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"  v-on:click="removeItem(item.text)">
                                <BIconXCircleFill/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'
    import { BIconXCircleFill } from 'bootstrap-vue'

    export default {
        name: "ListOfInputs",
        components:{
            BIconXCircleFill
        },
        data:function(){
            return{
                deleteIt:''
            }
        },
        methods:{
            ...mapMutations([
                'removeExpItem',
                'removeIncItem',
            ]),
            removeItem(inp){
                this.removeExpItem(inp)
            },
            removeIncomeItem(inp){
                this.removeIncItem(inp)
            }
        },
        computed:{
            ...mapGetters([
                'resolveTotalExpObjext',
                'resolveTotalIncObject',
                'totalIncome'
            ])
        }
    }
</script>

<style scoped>
    .clearfix::after {
        content: "";
        display: table;
        clear: both;
    }
    .right { float: right; }
    .red { color: #FF5049 !important; }
    .red-focus:focus { border: 1px solid #FF5049 !important; }

    .container {
        width: 1000px;
        margin: 60px auto;
        position: relative;
        box-sizing: border-box;
    }

    .income {
        float: left;
        width: 25rem;
        margin-right: 3rem;
    }

    .expenses {
        float: left;
        width: 25rem;
    }

    h2 {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    .icome__title { color: #28B9B5; }
    .expenses__title { color: #FF5049; }

    .item {
        padding: 13px;
        border-bottom: 1px solid #e7e7e7;
    }

    .item:first-child { border-top: 1px solid #e7e7e7; }
    .item:nth-child(even) { background-color: #f7f7f7; }

    .item__description {
        float: left;
    }

    .item__value {
        float: left;
        transition: transform 0.3s;
    }

    .item__percentage {
        float: left;
        margin-left: 20px;
        transition: transform 0.3s;
        font-size: 11px;
        background-color: #FFDAD9;
        padding: 3px;
        border-radius: 3px;
        width: 32px;
        text-align: center;
    }

    .income .item__value,
    .income .item__delete--btn {
        color: #28B9B5;
    }

    .expenses .item__value,
    .expenses .item__percentage,
    .expenses .item__delete--btn {
        color: #FF5049;
    }


    .item__delete {
        float: left;
    }

    .item__delete--btn {
        font-size: 22px;
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        display: none;
    }

    .item__delete--btn:focus { outline: none; }
    .item__delete--btn:active { transform: translateY(2px); }

    .item:hover .item__delete--btn { display: block; }
    .item:hover .item__value { transform: translateX(-20px); }
    .item:hover .item__percentage { transform: translateX(-20px); }


    .unpaid {
        background-color: #FFDAD9 !important;
        cursor: pointer;
        color: #FF5049;

    }

    .unpaid .item__percentage { box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1); }
    .unpaid:hover .item__description { font-weight: 900; }
</style>
