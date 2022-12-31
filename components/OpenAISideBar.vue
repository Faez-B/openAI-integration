<script setup>

</script>

<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar mb-3 md-mb-0">

        <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <i class="bi bi-robot pe-none me-2"></i>
            <span class="fs-4">Open AI</span>
        </div>

        <hr>

        <ul class="nav nav-pills flex-column mb-auto">
            <OpenAISidebarLink link="q_a" icon="patch-question" title="Q&A"/>
            <OpenAISidebarLink link="chat" icon="chat-dots" title="Chat"/>
            <OpenAISidebarLink link="friend" icon="emoji-smile" title="Friend chat"/>
            <OpenAISidebarLink link="marv" icon="emoji-expressionless" title="Marv"/>
            <OpenAISidebarLink link="facts" icon="lightbulb" title="Facts"/>
            <OpenAISidebarLink link="englishTranslator" icon="globe-americas" title="Translator"/>
            <OpenAISidebarLink link="interview" icon="question-diamond" title="Interview questions"/>
            <OpenAISidebarLink link="essayOutline" icon="book" title="Essay outline"/>
            <OpenAISidebarLink link="sql" icon="database-add" title="Create SQL requests"/>
            <OpenAISidebarLink link="sql2" icon="database" title="Translate to SQL"/>
            <OpenAISidebarLink link="adGeneration" icon="badge-ad" title="Ad Generation"/>
            <OpenAISidebarLink link="codeTranslation" icon="code" title="Code translator"/>
            <OpenAISidebarLink link="explainCode" icon="file-earmark-code" title="Explain code"/>
            <OpenAISidebarLink link="jsHelper" icon="filetype-js" title="JavaScript helper"/>
            <OpenAISidebarLink link="jsPython" icon="filetype-py" title="JS to Python"/>
            <OpenAISidebarLink link="keywords" icon="text-wrap" title="Extract keywords"/>
            <OpenAISidebarLink link="notesSummary" icon="card-text" title="Generate summary"/>
            <OpenAISidebarLink link="studyNotes" icon="list-ol" title="Notes to study"/>
        </ul>

    </div>
</template>

<style scoped>
    .sidebar {
        max-height: 94vh;
        overflow: auto;
        box-shadow: inset white -7px 0px 6px 0px;
    }

    @media screen and (max-width: 768px) {
        .sidebar {
            box-shadow: inset white -1px 3px 12px -6px;
            overflow: hidden;
        }

        ul {
            flex-direction: row !important;
            flex-wrap: initial;         
            overflow: auto;   
        }

        ul li a {
            margin-bottom: 0;
        }

        hr {
            margin: .5rem 0;            
        }
    }
</style>