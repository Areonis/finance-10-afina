import CustomLink from '../components/links/CustomLink'
import styles from './styles/Pages.module.scss'
export default function Requisites() {
  return (
    <div className={styles.requisites}>
      <div>
        <CustomLink to={'/'} className="back">
          На Главную
        </CustomLink>
      </div>

      <div className={styles.title}>Реквизиты</div>

      <div className={styles.requisites_content}>
        <div className={styles.row}>
          <div className={styles.row_item}>
            Реквизиты Полное наименование (согласно учредительным документам):
          </div>
          <div></div>
          <div className={styles.row_item}>
            ООО Афина Финанс Ломбард ( AFINA FINANCE LOMBARD, MAS ULYATI
            CHEKLANGAN JAMIYATI)
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Название компании:</div>
          <div></div>
          <div className={styles.row_item}>ООО Афина Финанс Ломбард</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Адрес местонахождения:</div>
          <div></div>
          <div className={styles.row_item}>
            Респ. Узбекистан, г.Фергана, улица Независимости 4.
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>ИНН:</div>
          <div></div>
          <div className={styles.row_item}> 304893968</div>
        </div>

        {/* <div className={styles.row}>
        <div className={styles.row_item}>Расчетный счет:</div>
        <div></div>
        <div className={styles.row_item}> 20208000805591030001</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Наименование учреждения банка:</div>
        <div></div>
        <div className={styles.row_item}>           
            Joint Stock Innovation Commercial Bank «Ipak Yuli” Mirabad branch
          </div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Адрес:</div>
        <div></div>
        <div className={styles.row_item}> 100015, Tashkent city, Mirabad street, 25</div>
        </div> */}

        <div className={styles.row}>
          <div className={styles.row_item}>Телефоны:</div>
          <div></div>
          <div className={styles.row_item}> +79812123197</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Почта:</div>
          <div></div>
          <div className={styles.row_item}> eyuldashev670@gmail.com</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Генеральный директор:</div>
          <div></div>
          <div className={styles.row_item}> Юлдашев Эркин Эргашович </div>
        </div>
      </div>
    </div>
  )
}
