import {createStore} from 'redux';
import {rootReducer} from '../reducers/root_reducer';

var defData ={products:[
{id:1,title:"Go Pro 7",price:50000,quantity:100,rating:4,likes:100,ImageUrl:"https://cdn3.techadvisor.co.uk/cmsdata/reviews/3684089/gopro_hero_7_black_review_1_thumb800.jpg"},
{id:2,title:"LED TV",price:25000,quantity:0,rating:3,likes:200,ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/81QkPz%2BagLL._SX466_.jpg"},
{id:3,title:"MI 3 Axis Gimbal",price:10000,quantity:200,rating:3,likes:500,ImageUrl:"https://members.syndrank.com/wp-content/uploads/2018/08/xiaomi-mijia-gimbal2-750x450.jpeg"},
{id:4,title:"Nikon 7200",price:20000,quantity:1000,rating:5,likes:200,ImageUrl:"https://assets.pcmag.com/media/images/390940-nikon-d7200.jpg?width=740\u0026height=416"},
{id:5,title:"DJI Mavic Pro",price:150000,quantity:10,rating:4,likes:100,ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51tXA-m1L4L._SX425_.jpg"}
],
users:[]
}

export var store = createStore(rootReducer,defData);