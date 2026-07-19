export interface Project {
  id: number;             
  title: string;          
  image: string;          
  description: string;     
  techStack: string[];     
  liveLink: string;        
  githubLink: string;      
  challenges: string;      
  futurePlans: string;    
  createdAt: Date;         
  updatedAt: Date;        
}

export interface Skill {
  id: number;
  name: string;            
  category: string;        
  createdAt: Date;
}

export interface Message {
  id: number;
  name: string;            
  email: string;           
  phone?: string | null;   
  message: string;         
  createdAt: Date;
}