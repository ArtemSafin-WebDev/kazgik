import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { RU_LOCALE } from './utils';

dayjs.extend(customParseFormat);

export default function datepicker() {
    const elements = Array.from(document.querySelectorAll('.js-date'));

    console.log('Picker elements', elements);

    elements.forEach(element => {
        const fromInput = element.querySelector('#from');
        const toInput = element.querySelector('#to');

        $(fromInput)
            .datepicker({
                format: 'dd.mm.yyyy',
                container: '#from-wrapper',
                language: RU_LOCALE ? 'ru' : 'en',
                autoclose: true
            })
            .on('show', function(e) {
                element.classList.add('datepicker-shown');
            })
            .on('hide', function(e) {
                element.classList.remove('datepicker-shown');
            })
            .on('changeDate', function(e) {
                $(toInput).datepicker('setStartDate', dayjs(e.date).toDate());
                $(fromInput).trigger('blur');
            });
        $(toInput)
            .datepicker({
                format: 'dd.mm.yyyy',
                container: '#to-wrapper',
                language: RU_LOCALE ? 'ru' : 'en',
                autoclose: true
            })
            .on('show', function(e) {
                element.classList.add('datepicker-shown');
            })
            .on('hide', function(e) {
                element.classList.remove('datepicker-shown');
            })
            .on('changeDate', function(e) {
                $(toInput).trigger('blur');
            });

        if (fromInput.value?.trim()) {
            const fromDate = dayjs(fromInput.value, 'DD.MM.YYYY');

            console.log('From date', fromDate);

            $(toInput).datepicker('setStartDate', fromDate.toDate());
        }
    });
}
