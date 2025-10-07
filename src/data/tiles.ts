import type { Tile, TileCategory } from '../types/tiles';
import { startTiles } from './start-tiles';

export const tiles: Tile[] = [
  // New comprehensive Start Journey Tiles
  ...startTiles,
  {
    id: 'start-ai-content-creation',
    title: 'AI for Content Creation',
    description: 'From blogs to graphics to video scripts — see how AI can boost your marketing reach.',
    level: 2,
    journeyType: 'start',
    children: ['start-ai-image-editor'],
    content: {
      type: 'text',
      data: {
        text: 'Explore how AI can help create engaging content across multiple formats including blog posts, social media graphics, and video scripts.'
      }
    },
    links: [
      {
        name: 'Canva AI',
        url: 'https://canva.com',
        description: 'AI-powered design and content creation',
        type: 'tool'
      },
      {
        name: 'Jasper AI',
        url: 'https://jasper.ai',
        description: 'AI writing assistant for marketing content',
        type: 'tool'
      }
    ],
    tags: ['content creation', 'marketing', 'design'],
  },
  {
    id: 'start-ai-image-editor',
    title: 'AI Image Editor',
    description: 'Create, edit, and enhance images using AI-powered tools for professional visual content.',
    level: 2,
    journeyType: 'start',
    parentId: 'start-ai-content-creation',
    content: {
      type: 'text',
      data: {
        text: `# AI Image Editor Guide

## 1. Enhance photos for online business

**Example:** Take a stock photo of your product and upload it to Gemini/Nano Banana

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Transform this into a high-quality, studio-style product image with a marble background. Use soft, balanced lighting, remove any background distractions, apply subtle color correction, and give it a clean, modern look suitable for an e-commerce catalog. Keep the product's shape, texture, and colors true to life. Ensure the shot is eye-level, highlighting the product directly. Zoom 20% out on the image and give it a slight side angle view, making sure it's centered.

## 2. Upgrade casual team photos

**Example:** Upload a group shot taken at your café

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Enhance this team photo to look professional. Replace the background with a clean office or neutral gradient, brighten the lighting, smooth colors, and make sure each face is evenly lit. Maintain authenticity while giving the shot a polished, corporate look.

## 3. Showcase before-and-after transformations

**Example:** Use images of a messy vs. clean dining table

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Create a split-screen before-and-after graphic. Keep the "before" side slightly muted and the "after" side vibrant. Add a subtle diagonal divider between them. Emphasize cleanliness and order on the "after" side with brighter lighting and sharper details.

## 4. Add subtle branding to images

**Example:** Use a stock croissant photo

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Add a small, semi-transparent logo watermark in the lower-right corner. Keep it crisp but not distracting. Ensure it works across light and dark backgrounds by adjusting opacity.

## 5. Create event promo graphics

**Example:** A photo of brunch cocktails

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Overlay text announcing an event (e.g., "Sunday Brunch — 10am to 2pm") in bold, modern typography. Place text in the top third, use a soft gradient background overlay to make it readable. Add a branded accent color border.

## 6. Apply seasonal themes

**Example:** A latte photo for fall promotions

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Add scattered autumn leaves around the edges. Apply a warm orange filter to give the photo a cozy seasonal feel. Keep the product clear and central, with seasonal accents enhancing but not overpowering it.

## 7. Highlight testimonials visually

**Example:** Customer review about your bakery

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Blur the original product photo slightly, then overlay a white text box with the customer's testimonial. Use clean typography, add quotation marks, and highlight the customer's name in bold.

## 8. Turn photos into infographics

**Example:** A photo of your new bread

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Add small infographic-style callouts with icons and short text like "Freshly Baked," "Locally Sourced Flour," and "100% Organic." Use arrows pointing to the bread. Keep the layout clean and professional.

## 9. Make playful travel swaps

**Example:** Upload your logo

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Place the logo into a famous landmark scene, such as on a street sign in Paris or on a storefront in New York. Ensure the perspective matches the environment so it looks natural yet fun.

## 10. Adjust mood and tone for campaigns

**Example:** A photo of your dining space

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Apply a modern, cool tone with subtle blues and whites for a fresh look, or a warm, vintage filter with soft yellows for a nostalgic feel. Keep lines sharp and details clear while shifting the overall mood.`
      }
    },
    links: [
      {
        name: 'Adobe Firefly',
        url: 'https://firefly.adobe.com',
        description: 'AI-powered image generation and editing',
        type: 'tool'
      },
      {
        name: 'Canva AI',
        url: 'https://canva.com',
        description: 'AI design tools for graphics and images',
        type: 'tool'
      },
      {
        name: 'Midjourney',
        url: 'https://midjourney.com',
        description: 'AI image generation from text prompts',
        type: 'tool'
      }
    ],
    tags: ['image editing', 'visual content', 'design']
  },

];

export const tileCategories: TileCategory[] = [
  {
    id: 'start-business-fundamentals',
    name: 'Startup Essentials',
    description: 'Critical areas to focus on when starting your business.',
    tiles: startTiles,
    level: 1,
    journeyType: 'start'
  },
];
