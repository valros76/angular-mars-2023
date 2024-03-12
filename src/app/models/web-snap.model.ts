export class WebSnap{
  public title!:string;
  public description!: string;
  public createdDate!: Date;
  public likes!: number;
  public imageUrl!: string;
  public likeBtnClass!: string;
  public isLiked!: boolean;

  constructor(
    title:string,
    description:string,
    createdDate: Date,
    likes: number,
    imageUrl: string,
    likeBtnClass: string,
    isLiked: boolean
  ){
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.likes = likes;
    this.imageUrl = imageUrl;
    this.likeBtnClass = likeBtnClass;
    this.isLiked = isLiked;
  }
}