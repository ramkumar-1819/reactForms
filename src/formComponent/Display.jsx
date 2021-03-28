import React, { Component } from 'react';
import './Display.css'

class Display extends React.Component{  //If Account is Personal return those related jsx else Bussiness related jsx is returned to Form Component
    render(){
        console.log(this.props.detail)
         return(<div className="style">
             {(this.props.value ==="Personal") &&
             <>
            <div>Account Type:Personal</div>
            <div>First Name:{this.props.detail.fname}</div>
            <div>Last Name:{this.props.detail.lname}</div>
            <div>Email:{this.props.detail.email}</div>
            <div>PhoneNumber:{this.props.detail.phone}</div>
            <div>Account Number:{this.props.detail.acc_num}</div>
            <div>IFSC:{this.props.detail.ifsc}</div>
            <div>City:{this.props.detail.city}</div>
            <div>Pincode:{this.props.detail.pincode}</div>
            <div>Address:{this.props.detail.address}</div>
            </>
            }
            {(this.props.value==="Bussiness")&&
            <>
             <div>Account Type:Bussiness</div>
             <div>BussinessName:{this.props.detail.bname}</div>
             <div>Email:{this.props.detail.email}</div>
             <div>PhoneNumber:{this.props.detail.phone}</div>
             <div>Account Number:{this.props.detail.acc_num}</div>
             <div>IFSC:{this.props.detail.ifsc}</div>
             <div>City:{this.props.detail.city}</div>
             <div>Pincode:{this.props.detail.pincode}</div>
             <div>Address:{this.props.detail.address}</div>
             
            </>
            }
            </div>)
     }
}
export default Display