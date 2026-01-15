import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BOMResult } from '@/types/bom';
import { ROOF_TYPE_LABELS } from '@/data/products';

export const exportBOMToPDF = (result: BOMResult): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(30, 58, 95); // Dark blue
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('AXXIOM', 14, 20);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Solar Mounting Systems', 14, 30);
  
  doc.setFontSize(14);
  doc.text('Materialenlijst (BOM)', pageWidth - 14, 25, { align: 'right' });
  
  // Date
  const today = new Date().toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.setFontSize(10);
  doc.text(today, pageWidth - 14, 35, { align: 'right' });
  
  // Configuration Summary
  doc.setTextColor(30, 58, 95);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Configuratie Overzicht', 14, 55);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const configData = [
    ['Daktype:', ROOF_TYPE_LABELS[result.config.roof.roofType]],
    ['Totaal Panelen:', `${result.totalPanels}`],
    ['Oriëntatie:', result.config.panel.orientation === 'landscape' ? 'Liggend' : 'Staand'],
    ['Paneel Afmetingen:', `${result.config.panel.height} x ${result.config.panel.width} x ${result.config.panel.thickness} mm`],
    ['Layout:', `${result.config.panel.rows} rijen x ${result.config.panel.columns} kolommen`],
    ['Profiel Kleur:', result.config.roof.profileColor === 'alu' ? 'Aluminium' : 'Zwart'],
    ['Klem Kleur:', result.config.roof.clampColor === 'alu' ? 'Aluminium' : 'Zwart'],
  ];
  
  let yPos = 65;
  configData.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, 14, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 60, yPos);
    yPos += 7;
  });
  
  // Materials Table
  doc.setTextColor(30, 58, 95);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Materialenlijst', 14, yPos + 10);
  
  autoTable(doc, {
    startY: yPos + 15,
    head: [['Productcode', 'Omschrijving', 'Benodigd', 'Verpakt', 'Bestellen']],
    body: result.items.map((item) => [
      item.productCode,
      item.description,
      item.required.toString(),
      item.packaged.toString(),
      item.toOrder.toString(),
    ]),
    headStyles: {
      fillColor: [30, 58, 95],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10,
    },
    bodyStyles: {
      fontSize: 9,
      textColor: [60, 60, 60],
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 35 },
      1: { cellWidth: 70 },
      2: { halign: 'center', cellWidth: 25 },
      3: { halign: 'center', cellWidth: 25 },
      4: { halign: 'center', cellWidth: 25, fontStyle: 'bold', textColor: [30, 58, 95] },
    },
    margin: { left: 14, right: 14 },
  });
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageHeight = doc.internal.pageSize.getHeight();
    
    doc.setDrawColor(200, 200, 200);
    doc.line(14, pageHeight - 20, pageWidth - 14, pageHeight - 20);
    
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('Dit document is automatisch gegenereerd door de Axxiom BOM Calculator', 14, pageHeight - 12);
    doc.text(`Pagina ${i} van ${pageCount}`, pageWidth - 14, pageHeight - 12, { align: 'right' });
  }
  
  // Save PDF
  const filename = `BOM_Axxiom_${result.totalPanels}panelen_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);
};
