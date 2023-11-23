const template = (icono, textoEuskera, textoCastellano, link) => `<div>
<img alt="" src="DocBinBlob.aspx?ID=${icono}" border="0" style="max-width:100%"/>&nbsp;</div>
<p>
<font size="4">${textoEuskera}.</font>
</p>
<div id="pastingspan1">
<font size="2">Berriaren eduki osoa irakurtzeko sartu Berrikuntza eta Behatoki Teknologiko atarian hurrengo <a href="${link}" target="_blank">estekan</a>.</font>
</div>
<div id="pastingspan1" style="font-size: 12.5pt;">
<span style="font-size: 16.6667px;">
    <br/>
</span>
</div>
<div id="pastingspan1">&nbsp;</div>
<p>
<font size="4">${textoCastellano}.</font>
</p>
<div id="pastingspan1">
<font size="2">Para leer el contenido completo de la noticia entra en el portal de Innovación y Vigilancia Tecnológica en el siguiente <a href="${link}" target="_blank">estekan</a>.</font>
</div>`;

export default template;
