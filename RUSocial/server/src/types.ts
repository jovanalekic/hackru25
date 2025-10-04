
type int = number;
export interface Profile {
   
  id: string;
  ruid: int;
  firstName: string;
  lastName: string;
  age: int;
  
  campus: Enumerator;
  major: string;
  year: int;
  bio: string;
  interests: string[];
  createdAt: string;
  politics: Enumerator;
  religion: Enumerator;
  

}

export interface SwipeRequest {
  swiperId: string;
  targetId: string;
  direction: 'like' | 'pass';
}