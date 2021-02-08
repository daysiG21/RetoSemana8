class tarea{
    constructor(tarea,prioridad, urgency, length){
        this.tarea=tarea
        this.prioridad=prioridad
        this.urgency=urgency
        this.length=length

        this.tareas=[]
    }

    anadirTarea(tarea){
        const dato = document.getElementById("tbody");
        this.tareas.push(`<tr>
        <td><input type="checkbox" class="form-check-input" name="${tarea}"  id="${tarea}" >
        ${tarea}</td>       
    </tr>`);

       // console.log(this.tareas);
       let contenido = this.tareas.join('')
       dato.innerHTML=contenido;
       //console.log(contenido)
    }
}

var btnAdd=document.getElementById("btnAdd");
var texto=document.getElementById("txtTexto");
let tareas = new tarea()
btnAdd.addEventListener('click',function(){
    if(texto.value.length==0){
        alert("Ingrese una tarea");
    }
    else{
        
        tareas.anadirTarea(texto.value)
        texto.value=""
    }
})