// JavaScript para detectar o IPFS e exibir um banner
if (!window.ipfs) {
  const block = document.createElement('div');
  block.className = 'ipfs-block';
  const banner = document.createElement('a');
  banner.className = 'ipfs-banner';
  banner.href = 'https://ipfs.example.com';
  banner.innerHTML = 'This page is available on the IPFS network!';
  block.appendChild(banner);
  document.body.appendChild(block);
}
