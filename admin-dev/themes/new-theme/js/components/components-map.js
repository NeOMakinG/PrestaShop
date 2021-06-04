/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

export default {
  multistoreDropdown: {
    searchInput: '.js-multistore-dropdown-search',
    scrollbar: '.js-multistore-scrollbar',
  },
  multistoreHeader: {
    modal: '.js-multishop-modal',
    headerButton: '.js-header-multishop-open-modal',
    searchInput: '.js-multishop-modal-search',
    jsScrollbar: '.js-multishop-scrollbar',
    setContextUrl: (location, urlLetter, itemId) => `${location}&setShopContext=${urlLetter}-${itemId}`,
  },
  form: {
    selectChoice: (language) => `select.translatable_choice[data-language="${language}"]`,
    selectLanguage: 'select.translatable_choice_language',
  },
  currentLength: '.js-current-length',
  recommendedLengthInput: '.js-recommended-length-input',
  multistoreCheckbox: '.multistore-checkbox',
  formGroup: '.form-group',
  inputNotCheckbox: ':input:not(.multistore-checkbox)',
  inputContainer: '.input-container',
  formControlLabel: '.form-control-label',
};
