document.querySelector('#add').onclick = function(){
    if(document.querySelector('#addtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#div_main').innerHTML += `
            <div class="task">
                <label class="checkbox-label" >
  <input type="checkbox" id="check" >
  <span class="mark"></span>
</label>
                <div id="taskname">
                    ${document.querySelector('#addtask input').value}
                </div> 
             
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        document.querySelector('#check').onclick=function()
       {
           document.getElementById("taskname").style.textDecoration="line-through";
           document.getElementById("taskname").style.color="green";
       }
       document.querySelector('#clear').onclick=function()
       {
           var clear=document.getElementById("div_main");
           clear.innerHTML="";
       }
    }
}
