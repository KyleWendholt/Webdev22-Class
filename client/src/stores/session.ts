import { reactive } from "vue";

const session = reactive({
  user: null as null | User,
});
export function login(firstName: string, lastName: string){
  session.user = {
    firstName,
    lastName,
  };
}
export class User{
  public firstName?: string;
  public lastName?: string;
}
export default session