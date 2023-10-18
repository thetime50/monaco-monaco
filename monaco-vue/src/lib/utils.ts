
export function openFile(accept = ".text,.js,.ts,.jsx,.tsx,.py" + ",.css,.html,.json"):Promise < {
  name: string,
  content?: string
}>{
  return new Promise((resolve,reject)=>{

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.accept = accept
    // document.body.appendChild(fileInput);


    fileInput.click();

    fileInput.addEventListener('change', function () {
      const file = fileInput.files && fileInput.files[0];
      if (file) {
        const fileName = file.name;
        // 读取文件内容
        const reader = new FileReader();
        reader.onload = function (e) {
          const content = e.target?.result;
          resolve({
            name: fileName,
            content: content
          })
        };
        reader.onerror = function(e){
          console.log(e)
          resolve({
            name: fileName,
            content: undefined,
          })
        }
        reader.readAsText(file);

        // 注意: 由于浏览器安全限制，你无法直接获取文件的完整路径
        // 但是你可以获取文件的名称
        console.log('File name:', fileName);
      }
    })
  })
}

