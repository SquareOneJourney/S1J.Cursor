import html2pdf from 'html2pdf.js';
import type { JourneyResult } from '../types/journeys';

export function generateWorksheetPDF(
  journeyType: string,
  userData: any,
  result: JourneyResult
): void {
  const worksheetContent = createWorksheetHTML(journeyType, userData, result);
  
  const element = document.createElement('div');
  element.innerHTML = worksheetContent;
  element.style.padding = '20px';
  element.style.fontFamily = 'Arial, sans-serif';
  element.style.lineHeight = '1.6';
  element.style.color = '#333';
  
  const options = {
    margin: 1,
    filename: `${journeyType}-worksheet.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(element).set(options).save();
}

function createWorksheetHTML(journeyType: string, userData: any, result: JourneyResult): string {
  const currentDate = new Date().toLocaleDateString();
  
  return `
    <div style="max-width: 800px; margin: 0 auto;">
      <header style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563EB; padding-bottom: 20px;">
        <h1 style="color: #2563EB; font-size: 28px; margin: 0;">SquareOneJourney</h1>
        <h2 style="color: #666; font-size: 20px; margin: 10px 0 0 0;">${journeyType.charAt(0).toUpperCase() + journeyType.slice(1)} Worksheet</h2>
        <p style="color: #888; margin: 5px 0 0 0;">Generated on ${currentDate}</p>
      </header>

      <section style="margin-bottom: 30px;">
        <h3 style="color: #2563EB; border-bottom: 1px solid #E5E7EB; padding-bottom: 10px;">Your Information</h3>
        ${formatUserData(journeyType, userData)}
      </section>

      <section style="margin-bottom: 30px;">
        <h3 style="color: #2563EB; border-bottom: 1px solid #E5E7EB; padding-bottom: 10px;">Key Takeaways</h3>
        <ul style="list-style-type: disc; padding-left: 20px;">
          ${result.keyTakeaways.map(takeaway => `<li style="margin: 10px 0;">${takeaway}</li>`).join('')}
        </ul>
      </section>

      <section style="margin-bottom: 30px;">
        <h3 style="color: #2563EB; border-bottom: 1px solid #E5E7EB; padding-bottom: 10px;">Next Steps</h3>
        <ol style="padding-left: 20px;">
          ${result.nextSteps.map(step => `<li style="margin: 10px 0;">${step}</li>`).join('')}
        </ol>
      </section>

      <section style="margin-bottom: 30px;">
        <h3 style="color: #2563EB; border-bottom: 1px solid #E5E7EB; padding-bottom: 10px;">Recommended Resources</h3>
        ${result.resources.map(resource => `
          <div style="margin: 15px 0; padding: 10px; background: #F9FAFB; border-radius: 5px;">
            <strong style="color: #2563EB;">${resource.name}</strong><br>
            <span style="color: #666;">${resource.description}</span><br>
            <span style="color: #888; font-size: 14px;">${resource.url}</span>
          </div>
        `).join('')}
      </section>

      <footer style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #888;">
        <p>Start your AI journey today at SquareOneJourney.com</p>
      </footer>
    </div>
  `;
}

function formatUserData(journeyType: string, userData: any): string {
  switch (journeyType) {
    case 'explore':
      return `
        <p><strong>Industry:</strong> ${userData.industry}</p>
        <p><strong>Help Area:</strong> ${userData.helpArea}</p>
      `;
    case 'start':
      return `
        <p><strong>Location:</strong> ${userData.location}</p>
        <p><strong>Skills:</strong> ${userData.skills}</p>
        <p><strong>Available Hours:</strong> ${userData.hoursPerWeek} hours per week</p>
        <p><strong>Business Type:</strong> ${userData.businessType}</p>
      `;
    case 'integrate':
      return `
        <p><strong>Improvement Area:</strong> ${userData.improvementArea}</p>
        <p><strong>Volume:</strong> ${userData.volume}</p>
        <p><strong>Channel:</strong> ${userData.channel}</p>
        <p><strong>Pain Point:</strong> ${userData.painPoint}</p>
      `;
    default:
      return '';
  }
}