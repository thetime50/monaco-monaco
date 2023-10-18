export interface MenuItem{
  id:string,
  text: string,
  child?:Array<MenuItem>,
  disable?:boolean,
  action?:()=>void
}

interface MenuConfigType {
  actions:{
    createFile: () => {},
    openFile: () => {},
  }
}

export function getMenuList(menuConfig: MenuConfigType): Array<MenuItem>{
  return [
      { id: "File", text: "File", child: [
        { id: "create-file", text: "create file", disable: true, action: menuConfig.actions.createFile},
        { id: "open-file", text: "open file", action: menuConfig.actions.openFile }  
      ], 
    },
    { id: "Edit", text: "Edit" },
    { id: "View", text: "View" },
    { id: "Window", text: "Window" },
    { id: "Help", text: "Help" },
  ]
}



