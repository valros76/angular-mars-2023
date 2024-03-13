export class WebSnap{

  constructor(
    public id:number,
    public title:string,
    public description:string,
    public createdDate: Date,
    public likes: number = 0,
    public imageUrl: string,
    public likeBtnClass:string,
    public isLiked: boolean,
    public location?:string
  ){
  }
}