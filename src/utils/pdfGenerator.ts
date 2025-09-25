import html2pdf from 'html2pdf.js';
import type { JourneyResult } from '../types/journeys';
import type { WorksheetItem } from '../types/worksheet';

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

  html2pdf().from(element).set({
    ...options,
    image: { type: 'jpeg' as 'jpeg', quality: 0.98 },
    jsPDF: { ...options.jsPDF, orientation: 'portrait' as 'portrait' }
  }).save();
}

export async function generatePDF(
  items: WorksheetItem[],
  filename: string = 'my-worksheet.pdf'
): Promise<void> {
  const worksheetContent = createWorksheetItemsHTML(items);
  
  const element = document.createElement('div');
  element.innerHTML = worksheetContent;
  element.style.padding = '20px';
  element.style.fontFamily = 'Arial, sans-serif';
  element.style.lineHeight = '1.6';
  element.style.color = '#333';
  
  const options = {
    margin: 1,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  return new Promise((resolve, reject) => {
    html2pdf().from(element).set({
      ...options,
      image: { type: 'jpeg' as 'jpeg', quality: 0.98 },
      jsPDF: { ...options.jsPDF, orientation: 'portrait' as 'portrait' }
    }).save().then(() => resolve()).catch(reject);
  });
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

function createWorksheetItemsHTML(items: WorksheetItem[]): string {
  const currentDate = new Date().toLocaleDateString();
  
  return `
    <div style="max-width: 800px; margin: 0 auto;">
      <header style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563EB; padding-bottom: 20px;">
        <h1 style="color: #2563EB; font-size: 28px; margin: 0;">SquareOneJourney</h1>
        <h2 style="color: #666; font-size: 20px; margin: 10px 0 0 0;">My Worksheet</h2>
        <p style="color: #888; margin: 5px 0 0 0;">Generated on ${currentDate}</p>
      </header>

      <section style="margin-bottom: 30px;">
        <h3 style="color: #2563EB; border-bottom: 1px solid #E5E7EB; padding-bottom: 10px;">Worksheet Summary</h3>
        <p><strong>Total Items:</strong> ${items.length}</p>
        <p><strong>Explore Items:</strong> ${items.filter(item => item.journeyType === 'explore').length}</p>
        <p><strong>Start Items:</strong> ${items.filter(item => item.journeyType === 'start').length}</p>
        <p><strong>Integrate Items:</strong> ${items.filter(item => item.journeyType === 'integrate').length}</p>
      </section>

      ${items.map((item) => `
        <section style="margin-bottom: 30px; padding: 20px; border: 1px solid #E5E7EB; border-radius: 8px;">
          <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 15px;">
            <h3 style="color: #2563EB; margin: 0; flex: 1;">${item.title}</h3>
            <div style="display: flex; gap: 10px; margin-left: 20px;">
              ${item.level ? `<span style="background: #EFF6FF; color: #2563EB; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Level ${item.level}</span>` : ''}
              ${item.journeyType ? `<span style="background: #F3F4F6; color: #374151; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${item.journeyType.charAt(0).toUpperCase() + item.journeyType.slice(1)}</span>` : ''}
            </div>
          </div>
          
          <p style="color: #666; margin-bottom: 15px;">${item.description}</p>
          
          ${item.notes ? `
            <div style="background: #F9FAFB; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
              <h4 style="color: #374151; margin: 0 0 10px 0; font-size: 14px;">Your Notes:</h4>
              <p style="margin: 0; color: #4B5563;">${item.notes}</p>
            </div>
          ` : ''}
          
          ${item.links && item.links.length > 0 ? `
            <div>
              <h4 style="color: #374151; margin: 0 0 10px 0; font-size: 14px;">Resources:</h4>
              ${item.links.map(link => `
                <div style="margin: 8px 0; padding: 8px; background: #F3F4F6; border-radius: 4px;">
                  <strong style="color: #2563EB;">${link.name}</strong><br>
                  <span style="color: #666; font-size: 13px;">${link.description}</span><br>
                  <span style="color: #888; font-size: 12px;">${link.url}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
          
          <div style="color: #888; font-size: 12px; margin-top: 15px; padding-top: 10px; border-top: 1px solid #E5E7EB;">
            Saved on ${new Date(item.savedAt).toLocaleDateString()}
          </div>
        </section>
      `).join('')}

      <footer style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #888;">
        <p>Continue your AI journey at SquareOneJourney.com</p>
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