import React from 'react';
import $ from 'jQuery';

import { getInfo } from '../../server/data/core'

class Index extends React.Component {

	constructor(props){
        super(props)

        this.state={
            info: getInfo(this.props.match.params.openid),
        }
    }

	componentWillMount() {


	}
	
	componentDidMount() {

		

	}
	getInfo() {

		$.get("/info",function(ret){
			console.info(ret);

		});
	}

	render() {
		return		<div className='max_box '>
						<div className='member_card' >
							<div className='member_card_box color_main_bg'>	
								<div className="t clear">
										<div className="user_head_img fl">
											<img src={this.state.info.logo} alt="" />
										</div>
									<div className='user_info_box fl' >
										<p className="p1">
											<span className="p">					
												{this.state.info.name}
												
											</span>
										</p>
										<p className="p2">
											<span>NO.{this.state.info.id}</span>
										</p>
									</div>
								</div>	
								<div className="qrcode" >
									<i className='icon iconfont icon-erweima'></i>
								</div>
							</div>
						</div>
						<div className='ul_list' >
							<ul className='ul' >
									<li className='clear ' >
										<a href="/haoke/customer/member_info">
											<i className="icon iconfont icon-xiangyoujiantou arrow_right"></i>
											<div className="fl">
												<i className="icon iconfont icon-huiyuandengji "></i>会员等级
											</div>
										</a>
									</li>
									<li className='clear mt'>
										<a href="/pay/1">
											<i className="icon iconfont icon-xiangyoujiantou arrow_right"></i>
											<div className="fl">
												<i className="icon iconfont icon-wodeyue "></i>我的余额
											</div>
										</a>
									</li>
									<li className='clear' >
										<a href='/haoke/customer/reward'>
											<i className='icon iconfont icon-xiangyoujiantou arrow_right'></i>
											<div className='fl'>
												<i className='icon iconfont icon-jifenduihuan '></i>
												积分兑换
											</div>
										</a>
									</li>
									<li className='clear' >
										<a href='/haoke/customer/coupon'>
											<i className='icon iconfont icon-xiangyoujiantou arrow_right'></i>
											<div className='fl'>
												<i className='icon iconfont icon-youhuiquan '></i>优惠劵
											</div>
											<div id='couponSize' className='fr'>
												{this.state.info.coupon_size}
											</div>
										</a>
									</li>
									<li className='clear mt' >
										<a href='/haoke/customer/customer'>
											<i className='icon iconfont icon-xiangyoujiantou arrow_right'></i>
											<div className='fl'>
												<i className='icon iconfont icon-wodeziliao '></i>我的资料
											</div>
										</a>
									</li>
									<li className='clear' >
										<a href='/haoke/customer/order'>
											<i className='icon iconfont icon-xiangyoujiantou arrow_right'></i>
											<div className='fl'>
												<i className='icon iconfont icon-jiaoyijiluicon '></i>交易记录
											</div>
										</a>
									</li>
									<li className='clear' >
										<a href='/haoke/customer/shop'>
											<i className='icon iconfont icon-xiangyoujiantou arrow_right'></i>
											<div className='fl'>
												<i className='icon iconfont icon-shiyongshanghuicon '></i>适用店铺
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>	
	}
};

export default Index;