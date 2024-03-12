export class WebSnap{
  public likeBtnClass: string;
  public isLiked: boolean;

  constructor(
    public title:string,
    public description:string,
    public createdDate: Date,
    public likes: number = 0,
    public imageUrl: string,
    public location?:string
  ){
    this.likeBtnClass = "like-cta";
    this.isLiked = false;
  }
}