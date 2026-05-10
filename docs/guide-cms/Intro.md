---
title: Cos'è il CMS
sidebar_position: 1
description: Introduzione all'editor online per la documentazione
---

# Cos'è il CMS e a cosa serve

Il sito di documentazione di Sabaoth Church Catania ha un **editor online** che permette di aggiungere e modificare pagine di documentazione **senza bisogno di installare nulla** sul proprio computer e senza conoscere la programmazione.

## Come funziona

L'editor si chiama **TinaCMS** ed è accessibile direttamente dal browser, all'indirizzo:

```
https://sabaothctdocs.netlify.app/admin
```

Quando salvi una modifica tramite l'editor:
1. Il testo viene salvato automaticamente su GitHub (il sistema che conserva i file del sito)
2. Netlify (il servizio che pubblica il sito) si accorge della modifica e aggiorna il sito
3. Dopo circa **1-3 minuti**, la modifica è visibile sul sito pubblico

## Chi può usarlo

Per accedere all'editor è necessario un **account GitHub**. Se non ce l'hai ancora, puoi crearne uno gratuitamente su [github.com](https://github.com).

Una volta che hai l'account, chiedi a chi gestisce il sito di aggiungerti come utente autorizzato.

## Cosa puoi fare

Con l'editor puoi:
- ✅ **Modificare** il testo di una pagina esistente
- ✅ **Creare** una nuova pagina di documentazione
- ✅ **Aggiungere immagini** alle pagine
- ✅ **Inserire video** da YouTube
- ✅ **Formattare il testo** (grassetto, corsivo, titoli, elenchi, ecc.)

## Le due collezioni: quale usare?

Quando entri nel pannello `/admin`, vedrai due sezioni nella colonna sinistra:

### 📄 Documentazione
È la collezione principale. Contiene tutti i file `.md` del sito — la grande maggioranza dei contenuti.

**Usala per:**
- Modificare o creare guide di testo (procedure, istruzioni, spiegazioni)
- Qualsiasi pagina che non contiene video incorporati

### 🧩 Documentazione (con componenti)
Contiene i file `.mdx` — documenti che usano elementi interattivi come video YouTube incorporati, calendari o altri componenti speciali.

**Usala quando:**
- Vuoi modificare una pagina che **contiene già un video** (es. *Calendario Turni*, *Usare Audacity*)
- Vuoi **aggiungere un video** YouTube in una pagina nuova o esistente

**Come inserire un video in questa collezione:**
1. Apri il documento dalla collezione *Documentazione (con componenti)*
2. Posiziona il cursore nel punto del testo dove vuoi il video
3. Clicca il pulsante **"+"** nella barra dell'editor → seleziona **"Inserisci Video"**
4. Incolla l'URL del video YouTube e conferma

:::tip Regola pratica
Se la pagina contiene solo testo → usa **Documentazione**.
Se contiene (o dovrà contenere) un video → usa **Documentazione (con componenti)**.
:::

:::caution Attenzione ai nomi file
Quando crei un nuovo documento, usa **trattini al posto degli spazi** nel nome del file (es. `guida-microfono` invece di `guida microfono`). Spazi e apostrofi causano un errore nell'editor.
:::

## Cosa NON fare

- ❌ Non modificare la struttura delle cartelle direttamente — usa sempre l'editor
- ❌ Non eliminare file senza essere sicuri di quello che fai
- ❌ Non modificare file tecnici come `docusaurus.config.js` o `package.json`

Nelle pagine successive trovi le istruzioni passo-passo per ogni operazione.
