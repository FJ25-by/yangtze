import Jimp from 'jimp';

export async function addWatermark(buffer, text) {
  // Load image
  let image = await Jimp.read(buffer);

  // Load font
  let font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);

  // Calculate text position (centered)
  let textWidth = Jimp.measureText(font, text);
  let textHeight = Jimp.measureTextHeight(font, text, textWidth);
  let x = (image.bitmap.width - textWidth) / 2;
  let y = (image.bitmap.height - textHeight) / 2;

  // Add text to image
  image.print(font, x, y, text);

  // Convert image to buffer
  let outputBuffer = await image.getBufferAsync(Jimp.AUTO);

  return outputBuffer;
}
