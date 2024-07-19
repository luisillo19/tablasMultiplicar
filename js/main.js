let tableContainer = document.getElementById('tables');
let result = 0;

// Bucle para sacar el número de la tabla 
for (let i = 1; i <= 10; i++){
    //Plantilla para mostrar encabezado y crear caja para operaciones de la tabla
   tableContainer.innerHTML += `
        <div class = 'tables__item'> 
            <h2 class= 'tables__title'>
                Tabla del ${i}
            </h2>
        
            <ul class= 'tables__list tables__list--${i}'>

            </ul>

        </div>
   `;

   for (let n = 1;  n <= 10 ; n++) {
    // Calcular resultado
        result = i * n;


        //Sacar caja donde mostrar operaciones
        let list = document.querySelector('.tables__list--'+ i);
        
        list.innerHTML+= `<li class= 'list__item'>${i + ' x ' + n + ' = ' + result}</li>`
   }

};

