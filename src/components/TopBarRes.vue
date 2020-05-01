<template>
    <div class="top">
        <div class="budget">
            <div class="budget__title">
                Available Budget on <span class="budget__title--month">{{getMonth()}}</span>
            </div>

            <div class="budget__value"> {{balance}}</div>

            <div class="budget__income clearfix">
                <div class="budget__income--text">Income</div>
                <div class="right">
                    <div class="budget__income--value">+ {{totalIncome}}</div>
                    <div class="budget__income--percentage">&nbsp;</div>
                </div>
            </div>

            <div class="budget__expenses clearfix">
                <div class="budget__expenses--text">Expenses</div>
                <div class="right clearfix">
                    <div class="budget__expenses--value">- {{expanditures}}</div>
                    <div class="budget__expenses--percentage">{{((expanditures/totalIncome)*100).toFixed(2)}}%</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    export default {
        name: "TopBarRes",
        methods:{
            getMonth(){
                let month = new Date();
                return month.toDateString()
            }
        },
        computed: {
            ...mapGetters([
                'balance',
                'expanditures',
                'totalIncome'
            ])
        }

    }
</script>

<style scoped>
    .top {
        height: 40vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(../assets/back.png);
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .budget {
        position: absolute;
        width: 350px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }

    .budget__title {
        font-size: 18px;
        text-align: center;
        margin-bottom: 10px;
        font-weight: 300;
    }

    .budget__value {
        font-weight: 300;
        font-size: 46px;
        text-align: center;
        margin-bottom: 25px;
        letter-spacing: 2px;
    }

    .budget__income,
    .budget__expenses {
        padding: 12px;
        text-transform: uppercase;
    }

    .budget__income {
        margin-bottom: 10px;
        background-color: #28B9B5;
    }

    .budget__expenses {
        background-color: #FF5049;
    }

    .budget__income--text,
    .budget__expenses--text {
        float: left;
        font-size: 13px;
        color: #444;
        margin-top: 2px;
    }

    .budget__income--value,
    .budget__expenses--value {
        letter-spacing: 1px;
        float: left;
    }

    .budget__income--percentage,
    .budget__expenses--percentage {
        float: left;
        width: 34px;
        font-size: 11px;
        padding: 3px 0;
        margin-left: 10px;
    }

    .budget__expenses--percentage {
        background-color: rgba(255, 255, 255, 0.2);
        text-align: center;
        border-radius: 3px;
    }
</style>
