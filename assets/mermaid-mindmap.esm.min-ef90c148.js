import{_ as r}from"./app-25d64913.js";import"./framework-1bd9c91b.js";const t="mindmap",i=a=>a.match(/^\s*mindmap/)!==null,o=async()=>{const{diagram:a}=await r(()=>import("./diagram-definition.0faef4c2-4dda171c.js"),[]);return{id:t,diagram:a}},e={id:t,detector:i,loader:o};export{e as default};