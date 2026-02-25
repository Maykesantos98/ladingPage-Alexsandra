# Alexsandra Moreira | Psicóloga Clínica (TCC)
## Site profissional — CRP 06/137762

---

## 📁 Estrutura de arquivos

```
alexsandra/
│
├── index.html            → Página principal (HTML limpo)
├── css/
│   └── estilos.css       → Estilos, cores, animações e responsividade
├── js/
│   ├── depoimentos.js    → ✏️  EDITE AQUI os depoimentos
│   └── main.js           → Comportamentos: nav, scroll, FAQ
└── fotos/
    └── (fotos dos pacientes para os depoimentos)
```

---

## ✏️ Como adicionar depoimentos

Abra `js/depoimentos.js` e edite o array `DEPOIMENTOS`.

**Sem foto:**
```js
{
  texto: "Depoimento do paciente.",
  nome: "Maria S.",
  tipo: "Atendimento Online",
  cor: "linear-gradient(135deg, #8A9A50, #6B7A3E)"
},
```

**Com foto:**
```js
{
  texto: "Depoimento do paciente.",
  nome: "João P.",
  tipo: "Atendimento Online",
  foto: "fotos/joao.jpg"
},
```

---

## 📋 Checklist antes de publicar

| Item | Status |
|------|--------|
| CRP 06/137762 | ✅ Atualizado |
| WhatsApp (11) 97869-9799 | ✅ Atualizado |
| E-mail alexsandra.moreira.psi@gmail.com | ✅ Atualizado |
| Instagram @alexsandramoreirapsi | ✅ Atualizado |
| Atendimento 100% Online | ✅ Atualizado |
| Abordagem TCC | ✅ Atualizado |
| Cores Verde Oliva | ✅ Atualizado |
| Google Agenda | ⚠️  Substituir pelo link real da sua agenda pública |
| Foto da psicóloga | ⚠️  Atualizar caminho da foto no index.html |
| Depoimentos reais | ⚠️  Editar js/depoimentos.js |

---

## 🌐 Como publicar

**Netlify (grátis):** arraste a pasta no netlify.com — HTTPS automático em segundos.

**Hostinger / KingHost:** envie via FTP ou Gerenciador de Arquivos.

## 🔧 Testar localmente

```bash
python3 -m http.server 8080
# Acesse: http://localhost:8080
```
