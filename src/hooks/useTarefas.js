import {useState, useEffect, useRef} from 'react';

export function useTarefas(){

    //* DECLARAÇÃO DOS ESTADOS INICIAIS E REFERÊNCIAS
    const[input, setInput] = useState('');
    const[listaDeTarefas, setListaDeTarefas] = useState([]);
    const[select, setSelect] = useState('');
    const[catColor, setCatColor] = useState('black');
    const[tarefaEmEdicao, setTarefaEmEdicao] = useState(null);
    const carregamentoIncial = useRef(true);  
    const inputTarefa = useRef(null);
    const inputEdicao = useRef(null);




    //* FUNÇÕES
    function mudancaInput(mudanca){     
        setInput(mudanca.target.value);
    } 
    

    function addTarefaNaLista(valorTarefa, valorCategoria) {
        if (valorTarefa.trim() === "" || valorCategoria === "") {
            alert("Digite alguma tarefa e selecione uma categoria!");
            inputTarefa.current.focus();
            return;
        }

        if (tarefaEmEdicao !== null) {
            alert("Termine de editar a tarefa antes de criar uma nova!");
            return;
        }

        const novaTarefa = {
            id: Date.now(),
            texto: valorTarefa,
            concluido: false,
            categoria: valorCategoria,
        };
        let novaLista = [...listaDeTarefas, novaTarefa];
        setListaDeTarefas(novaLista);
        setSelect("");
        setCatColor("black");
        setInput("");
    }


    function addTarefaEnter(evento) {
        if (evento.key === "Enter") {
            evento.preventDefault();
            addTarefaNaLista(input, select);
        }
    }


    function mudancaSelect(mudanca) {
        setSelect(mudanca.target.value);

        switch (mudanca.target.value) {
            case "trabalho" : setCatColor("rgb(35, 35, 204)");
            case "pessoal" : setCatColor("crimson");
            case "estudos" : setCatColor("rgb(218, 186, 7)");
            case "casa" : setCatColor("rgb(100, 44, 7)");
            case "lazer" : setCatColor("orangered");
            case "financas" : setCatColor("green");
            case "projetos" : setCatColor("rgb(47, 167, 155)");
            default : setCatColor("black");
        }
    }


    function removerTarefaDaLista(idTarefa) {
        setListaDeTarefas(listaDeTarefas.filter((tarefa) => tarefa.id !== idTarefa));
    }


    function marcarTarefaConcluida(idTarefa) {
        setListaDeTarefas((lista) =>
            lista.map((tarefa) =>
                tarefa.id === idTarefa
                ? { ...tarefa, concluido: !tarefa.concluido }
                : tarefa
            )
        );
    }


    function mudancaEdicao(idTarefa) {
        const tarefa = listaDeTarefas.find((t) => t.id === idTarefa);
        if (!tarefa) return;

        if (tarefaEmEdicao !== null && tarefaEmEdicao !== idTarefa) {
            alert("Termine de editar a tarefa atual antes de editar outra!");
            return;
        }

        if (tarefaEmEdicao === idTarefa) {
            salvar(tarefa.texto);
            return;
        }

        setTarefaEmEdicao(idTarefa);
    }


    function editarTarefa(idTarefaEmEdicao, textoEditado) {
        setListaDeTarefas(
            listaDeTarefas.map((tarefaEditada) =>
            idTarefaEmEdicao === tarefaEditada.id
            ? { ...tarefaEditada, texto: textoEditado }
            : tarefaEditada
            )
        );
    }


    function mudarBotao(idTarefa) {
        const tarefa = listaDeTarefas.find((t) => t.id === idTarefa);
        if (!tarefa) return "";

        return tarefaEmEdicao === idTarefa ? "✅" : "✏️";
    }


    function salvar(conteudoTarefa) {
        conteudoTarefa.trim() === ""
        ? (alert("A sua tarefa está vazia, digite algo!"), setTimeout(() => inputEdicao.current.focus(), 0))
        : setTarefaEmEdicao(null);
    }


    function teclaSalvar(tecla, conteudoTarefa) {
        if (tecla.key === "Enter") {
            tecla.preventDefault();
            salvar(conteudoTarefa);
        }
    }



    //* AO CARREGAR A PÁGINA
    useEffect(() => {
        const tarefasSalvas = localStorage.getItem("tarefas");
        if (tarefasSalvas) {
        try {
            const tarefasParseadas = JSON.parse(tarefasSalvas);
            setListaDeTarefas(tarefasParseadas);
        } catch (error) {
            console.error("Erro ao carregar tarefas", error);
            localStorage.removeItem("tarefas");
        }
        } else {
        console.warn("localStorage não está disponível");
        }
    }, []);

    
    useEffect(() => {
        if (carregamentoIncial.current) {
        carregamentoIncial.current = false;
        return;
        }

        localStorage.setItem("tarefas", JSON.stringify(listaDeTarefas));
    }, [listaDeTarefas]);




    return{
      mudancaInput,
      addTarefaNaLista,
      addTarefaEnter,
      mudancaSelect,
      removerTarefaDaLista,
      marcarTarefaConcluida,
      mudancaEdicao,
      editarTarefa,
      mudarBotao,
      salvar,
      teclaSalvar,
      input,
      setInput,
      listaDeTarefas,
      setListaDeTarefas,
      select,
      setSelect,
      catColor,
      setCatColor,
      carregamentoIncial,
      tarefaEmEdicao,
      setTarefaEmEdicao,
      inputTarefa,
      inputEdicao      
    };
}