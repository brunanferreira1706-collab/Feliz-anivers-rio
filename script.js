```javascript
function irParaPagina(numeroPagina) {

    const destino = document.getElementById("pagina" + numeroPagina);

    if (destino) {
        destino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
```
