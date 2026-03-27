# Alexsandra Moreira | Psicóloga Clínica (TCC)
## Site profissional — CRP 06/137762

---

## Estrutura de arquivos

```
ladingPage-Alexsandra/
|
|-- index.html            -> Página principal
|-- css/
|   `-- estilos.css       -> Estilos, responsividade e animações
|-- js/
|   |-- main.js           -> Comportamentos (menu, scroll, FAQ, botão topo)
|   `-- depoimentos.js    -> Script dos depoimentos (desativado no HTML)
`-- fotos/
    `-- Perfil.jpeg       -> Foto principal
```

---

## Estado atual do projeto

- Fluxo de conversão: **somente WhatsApp** (sem agenda incorporada no site).
- Menu: transparente no topo, sólido ao rolar, esconde ao descer e volta ao subir.
- Botões fixos: WhatsApp + botão para voltar ao início.
- Seção de depoimentos: **temporariamente desativada** no `index.html`, com código preservado para reativação futura.

---

## Checklist antes de publicar

| Item | Status |
|------|--------|
| CRP 06/137762 | OK |
| WhatsApp (11) 97866-9799 | OK |
| E-mail alexsandra.moreira.psi@gmail.com | OK |
| Instagram @alexsandramoreirapsi | OK |
| Atendimento 100% online | OK |
| Abordagem TCC | OK |
| Links externos com segurança (`rel`) | OK |
| Agenda no site | Removida (intencional) |
| Depoimentos | Desativados (intencional) |

---

## Como reativar depoimentos no futuro

No `index.html`, remova o bloco de comentário entre:

- `TESTIMONIALS TEMPORARILY DISABLED`
- `END TESTIMONIALS TEMPORARILY DISABLED`

Depois disso, confira se o `<script src="js/depoimentos.js"></script>` permanece ativo.

---

## Publicação rápida

- Netlify: arraste a pasta do projeto para o painel.
- Hospedagem tradicional: envie os arquivos via FTP/Gerenciador de Arquivos.

## Testar localmente

```bash
python -m http.server 8080
# Acesse: http://localhost:8080
```
