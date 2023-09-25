"use strict";
//--------------------------TYPESCRIPT PRACTICE-----------------------
//--------------------TypeScript Explicit & Union type------------------
// let a : number | string;
// a = "nahid";
// let arr : string[] = [];
// arr.push("five");
// let obj : {
//     name: string,
//     roll: number
// };
// obj = {
//     name: "nahid",
//     roll: 5
// };
//--------------------TypeScript Dynamic Type----------------------
// let a : any;
// a= "Nahid";
// a= 5;
// let friends : any[] = [];
// friends.push("arif");
// friends.push(true);
// let friends2 : {
//     name : any,
//     roll: any
// }
// friends2 = {
//     name: "nahid",
//     roll: 5
// }
//------------------TypeScript How to work Function------------------
// const myFunc = (a: number, b: number, c: number = 7) =>{
//     console.log(a, b)
// }
// myFunc(5, 6);
//------------------------TypeScript Aliases--------------------
// type stringOrNumber = string | number;
// type userType = {name: string, roll: number};
// const userInfo = (
//     id: stringOrNumber,
//     user: userType
// ) =>{
//     console.log(id, user.name, user.roll)
// }
// const newFunc = (user: userType) =>{
//     console.log(user.name, user.roll)
// }
//--------------------------TypeScript Function Signetures----------------------
// let add : (a: number, b: number) => number;
// add = (a, b) =>{
//   return a + b;
// }
// add(4,5);
// let user : (id: string | number, userInfo: {name: string, roll: number}) => void;
// user = (id, userInfo) =>{
//    console.log(id, userInfo)
// }
// user(2, {name: "nahid", roll: 4})
//--------------------------TypeScript Classes---------------------------
// class Players {
//     name: string;
//     age: number;
//     country: string;
//     constructor(n: string, a: number, country: string){
//         this.name = n;
//         this.age = a;
//         this.country = country;
//     }
//     play(){
//         console.log(`playing ${this.name} from ${this.country}`);
//     }
// }
// const nahid = new Players('Nahid', 21, 'Bangladesh');
// const newArr : Players[] = [];
// newArr.push(nahid);
//-------------------------TypeScript Acess Modifier------------------------
// class Players {
//     constructor(
//         readonly name: string,
//         private age: number,
//         public country: string
//     ){}
//     play(){
//         console.log(`playing ${this.name} from ${this.country}`);
//     }
// }
//------------------------TypeScript Module System-----------------------
// import {Players} from './classes/Players.js';
// const nahid = new Players('Nahid', 21, 'Bangladesh');
// console.log(nahid.country);
//--------------------------------TS Interface: In object-------------------------
// interface RectangleOptions {
//     width: number,
//     length: number
// }
// function RectangleCalculator(options: RectangleOptions){
//     let width = options.width;
//     let length = options.length;
// }
// const threeDRectangle = {width : 30, length: 40, height: 50};
// RectangleCalculator(threeDRectangle);
//-------------------------TypeScript Generics----------------------
// const addId = <T extends {
//     name: string,
//     country: string,
//     age: number
// }>(obj : T) =>{
//     const id : number = Math.floor(Math.random() * 100);
//     return {...obj, id}
// }
// const player = {
//     name: "Mashrafi",
//     country: 'Bangladesh',
//     age: 38
// }
// addId(player);
//----------------------TypeScript Generics In Interface-----------------
// interface APIResponse<T> {
//     status: number,
//     type: string,
//     data: T
// }
// const newAPI : APIResponse<string> = {
//     status: 200,
//     type: "active",
//     data: "REST"
// }
//---------------------------TypeScript Enum---------------------------
// enum ResType {'SUCCESS', 'FAILED', 'UNAUTHENTICATED', 'FORBIDDEN'}
// interface APIResponse<T> {
//     status: number,
//     type: ResType,
//     data: T
// }
// const newAPI : APIResponse<string> = {
//     status: 200,
//     type: ResType.UNAUTHENTICATED,
//     data: "REST"
// }
// console.log(newAPI)
//------------------------------TypeScript Tuple-------------------------
// let arr = [3, 'nahid', {passed: 'pass'}];
// arr[2] = "yes";
// let arr2 : [number, string, object] = [3, 'nahid', {passed: 'pass'}]
// arr2[0] = "sahim";
