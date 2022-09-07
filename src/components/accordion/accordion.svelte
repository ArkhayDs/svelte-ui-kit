<script>
    import './accordion.scss'

    /**
    *  title of an paragraphe 
    */
    export let faqTitle =  'Non eu eiusmod consectetur sunt consequat.';
    
    export let faqContent = 'Reprehenderit ullamco culpa pariatur ame Reprehenderit ullamco culpa pariatur ame Reprehenderit ullamco culpa pariatur ameRReprehenderit ullamco culpa pariatur ameeprehenderit ullamco culpa pariatur amet. Sint consectetur cupidatat exercitation tempor.';

    let contentDisplayId = null;
    const clickTitle1 = () => {
      if(contentDisplayId  == 1) {
        contentDisplayId = null;
        return;
      }
      contentDisplayId =  1;
    };
    const clickTitle2 = () => {
      if(contentDisplayId  == 2) {
        contentDisplayId = null;
        return;
      }
      contentDisplayId =  2;
    };
    const clickTitle3 = () => {
      if(contentDisplayId  == 3) {
        contentDisplayId = null;
        return;
      }
      contentDisplayId =  3;
    };
</script>

<div class="container">
  <div class="container_faq">
    <div class="container_faq_title" on:click={clickTitle1}>
      <p>{faqTitle}</p>
    </div>
    <div class="container_faq_content {contentDisplayId == 1 ? 'schow' : ''}">
      <p>{faqContent}</p>
    </div>
  </div>
  <div class="container_faq">
    <div class="container_faq_title " on:click={clickTitle2}>
      <p>{faqTitle}</p>
    </div>
    <div class="container_faq_content {contentDisplayId == 2 ? 'schow' : ''}">
      <p>{faqContent}</p>
    </div>
  </div>
  <div class="container_faq">
    <div class="container_faq_title" on:click={clickTitle3}>
      <p>{faqTitle}</p>
    </div>
    <div class="container_faq_content {contentDisplayId == 3 ? 'schow' : ''}">
      <p>{faqContent}</p>
    </div>
  </div>

</div>
