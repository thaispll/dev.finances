const Modal = {
    open() {
        //abrir modal
        //Add class active ao modal
        document.querySelector('.modal-overlay')
            .classList.add('active');
    },
    close() {
        //fechar o modal
        //Remover class active ao modal
        document.querySelector('.modal-overlay')
            .classList.remove('active');
    }
}

const transactions = [{
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {
        //somar entradas
    },
    expenses() {
        //somar as saídas
    },

    total() {
        //entradas - saídas
    }

}


//Pegar transações do objeto e passar no HTML


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        console.log(tr.innerHTML);

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction) { //efetuada interpolação
        const CSSclass = transaction.amount > 0 ? "income" : "expense" //condicional, a cada transação será verificada
        const amount = Utils.formatCurrency(transaction.amount);
        const html = ` 
        <tr>
            <td class="date">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="">
            </td>
        </tr>`

        return html;
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "") //replace é uma funcionalidade da string, por isso a sua utilização nessa linha
            //regex

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction) { //pode ser utilizado sempre que se utiliza um array
    //Para cada elemento de transação vai rodar
    DOM.addTransaction(transaction)
})