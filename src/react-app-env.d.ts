/// <reference types="react-scripts" />

type Blog =  {
    title: string;
    body: string;
    author: string;
    id: number;
}

type BlogFetchData = { 
    error: string, 
    loading: boolean, 
    data: Blog  
}