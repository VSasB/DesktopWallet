// @flow
// Colors named with: chir.ag/projects/name-that-color/

// Lights
const white = '#FFFFFF';
const gray = '#DDDDDD';
const silver = '#BBBBBB';
const silverChalice = '#AAAAAA';
const boulder = '#777777';
const doveGray = '#727272';
const scorpion = '#5D5D5D';
const manatee = '#8E8E96';
const friarGray = '#828282';

// Darks
const black = '#000000';
const shark = '#212124';
const tundora = '#4E4B4B';
const shipGray = '#3E3C42';
const codGray = '#1D1D1D';
const mineShaft = '#3A3A3A';
const woodsmoke = '#222222';
const heavyMetal = '#0A0A0A';

// Colors
const saffron = '#36bbe0';
const brightSun = '#3054bc';
const offBrand = 'rgba(48,84,188,0.65)';
const error = '#FF6C6C';
const success = '#51d1f5';

// Misc
const transparent = 'transparent';

export const DARK_COLORS = {
  // General
  error,
  success,
  text: white,
  background: shark,
  divider: black,
  inactiveItem: scorpion,
  activeItem: saffron,

  // Header
  headerTitle: white,

  // Select
  selectButtonShadow: offBrand,

  // Send View (Additional Options Section)
  sendAdditionalOptionsBg: black,
  sendAdditionalOptionsBorder: black,
  sendAdditionalInputBg: shark,
  sendAdditionalInputText: white,

  // Dropdown
  dropdownBg: scorpion,
  dropdownHoveredBg: shark,
  dropdownBorder: tundora,
  dropdownIconBorder: friarGray,
  dropdownOpenedIconBorder: gray,

  // Card
  cardBackgroundColor: black,
  sendCardBg: black,
  sendCardBorder: transparent,

  // Buttons
  buttonPrimaryBg: brightSun,
  buttonPrimaryDisabledBg: brightSun,
  buttonPrimaryText: gray,
  buttonSecondaryBg: gray,
  buttonSecondaryDisabledBg: brightSun,
  buttonSecondaryText: black,
  buttonSecondaryBorder: gray,
  buttonSecondaryHoveredBg: silver,
  buttonBorderColor: shipGray,

  // Transactions
  transactionSent: error,
  transactionReceived: success,
  transactionsDate: boulder,
  transactionsItemHovered: woodsmoke,
  transactionItemBg: black,
  transactionItemHoverBg: heavyMetal,
  transactionItemBorder: transparent,
  transactionItemAddress: silverChalice,
  transactionItemAddressHover: white,
  transactionDetailsShadow: `0px 0px 20px 0px ${black}`,
  transactionDetailsBg: shark,
  transactionDetailsRowHover: codGray,
  transactionDetailsDivider: mineShaft,
  transactionDetailsLabel: boulder,
  transactionLabelText: boulder,
  transactionLabelTextHovered: white,

  // Masternode
  masternodesEnable: success,
  masternodesExpire: error,
  masternodesVinSpent: error,
  masternodesRemoved: error,
  masternodesPosError: error,
  masternodesItemHovered: woodsmoke,
  masternodesItemBg: black,
  masternodesItemHoverBg: heavyMetal,
  masternodesItemOwnedBg: brightSun,
  masternodesItemBorder: transparent,
  masternodesLabelText: boulder,
  masternodesLabelTextHovered: white,
  masternodesPanelHeader: boulder,
  masternodesSummaryBg: black,
  masternodesSummaryBorder: black,
  masternodesSummaryColumnBorder: woodsmoke,


  // Status Pill
  statusPillLabel: doveGray,
  statusPillBg: black,
  statusPillBorder: black,

  // Sidebar
  sidebarBg: black,
  sidebarBorderRight: black,
  sidebarLogoGradientBegin: saffron,
  sidebarLogoGradientEnd: brightSun,
  sidebarHoveredItemLabel: manatee,
  sidebarActiveItemBorder: error,
  sidebarItem: scorpion,
  sidebarItemActive: saffron,
  sidebarItemHovered: white,
  sidebarItemHoveredBg: shark,

  // QRCode
  qrCodeWrapperBg: black,
  qrCodeWrapperBorder: black,

  // Forms
  inputBg: black,
  inputBorder: transparent,
  inputBorderActive: woodsmoke,

  // Wallet Summary
  walletSummaryBg: black,
  walletSummaryBorder: black,
  walletSummaryUnconfirmed: silver,
  walletSummaryShielded: white,
  walletSummaryTransparent: white,

  // Wallet Address
  walletAddressBg: black,
  walletAddressBorder: black,
  walletAddressInput: friarGray,
  walletAddressInputHovered: white,
  walletAddressTooltip: black,
  walletAddressTooltipBg: white,

  // Console
  consoleBg: black,
  consoleBorder: transparent,

  // Settings
  settingsCardBg: black,
  settingsLearnMore: silverChalice,
  settingsLearnMoreHovered: white,

  // Loading
  loadingScreenBg: black,
  loadingScreenText: white,
  loadingScreenProgress: saffron,
};
