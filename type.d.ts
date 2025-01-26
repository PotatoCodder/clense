export type UsersName = {
  id: number,
  name: string,
}
export type User = {
  id: number, 
  name: string,
  age: number,
  bio?: string,
  email: string,
  city: string,
  username: string,
  password: string
  status: boolean
}

export type Posts = {
  id: number,
  name: string,
  title: string,
  content: string,
  date: string,
}

export type ParamProp = {
  params: {
      id: string
    }
  }
export type IdPromise = {
    params: Promise<{
        id: string
      }>
    }
export type GroupData = {
  id: number,
  name: string,
  bio: string,
  members: number,
}