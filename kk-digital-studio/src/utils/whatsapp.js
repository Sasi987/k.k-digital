// Frontend WhatsApp deep-links (wa.me). All real automation runs server-side.
export const STUDIO_WHATSAPP = '917092421902';
export const STUDIO_PHONE_DISPLAY = '70924 21902';
export const STUDIO_PHONE_TEL = '+917092421902';

export function waLink(message) {
  return `https://wa.me/${STUDIO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const waGeneral = () =>
  waLink(`Hello KK DIGITAL STUDIO 👋\n\nI would like to know more about your photography services.`);

export const waProduct = ({ productName, size, material, price }) =>
  waLink(
    `Hello KK DIGITAL STUDIO 👋\n\nI am interested in this photo frame:\n\nProduct: ${productName}\nSize: ${size}\nMaterial: ${material}\nPrice: ${price}\n\nPlease provide more details.`
  );

export const waBooking = ({ service, date, time, name, phone }) =>
  waLink(
    `Hello KK DIGITAL STUDIO 👋\n\nI would like to book a photography session.\n\nService: ${service}\nDate: ${date}\nTime: ${time}\nName: ${name}\nPhone: ${phone}`
  );

export const waCart = (items, total) => {
  const lines = items
    .map(
      (i) =>
        `• ${i.name} — ${i.sizeLabel}, ${i.materialLabel}, ${i.colorLabel} × ${i.qty} = ${i.lineTotal}`
    )
    .join('\n');
  return waLink(
    `Hello KK DIGITAL STUDIO 👋\n\nI am interested in placing an order.\n\nCart Items:\n${lines}\n\nTotal: ${total}\n\nPlease help me with the next step.`
  );
};
