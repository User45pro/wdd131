// Obtener el año actual y mostrarlo en el span con id 'currentyear'
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Obtener la fecha de la última modificación del documento y mostrarla
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
