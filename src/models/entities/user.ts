export interface UserProps {
  uuid: string;
  color: string;
  username: string;
  top: number;
  left: number;
}

export class User implements UserProps {
  public uuid: string;
  public color: string;
  public username: string;
  public top: number;
  public left: number;

  // constructor(props: UserProps) {
  //   this.uuid = props.uuid;
  //   this.color = props.color;
  //   this.username = props.username;
  // }
}