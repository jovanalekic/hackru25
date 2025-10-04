
type int = number;
export interface Profile {
   
  id: string;
  ruid: int;
  firstName: string;
  lastName: string;
  age: int;
  gender: Enumerator;
  romantic: boolean; //looking for platonic or romantic connection
  ethnicity: string;
  photo: File;
  campus: Enumerator;
  major: string;
  year: int;
  bio: string;
  likes: string[];
  dislikes: string[];
  interests: string[];
  politics: Enumerator;
  religion: Enumerator;
  genderPreference: Enumerator;
  responseAnswers: string[];
  lookingFor: Enumerator; // romantic only, short term, long term, casual
}

export interface SwipeRequest {
  swiperId: string;
  targetId: string;
  direction: 'like' | 'pass';
}