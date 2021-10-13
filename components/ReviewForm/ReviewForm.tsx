import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import React from 'react';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { IReviewForm } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';

export const ReviewForm = ({ productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}
                 {...props}
            > 
                 <Input {...register('name')} placeholder='Имя' />
                 <Input {...register('title')} className={styles.title} placeholder='Заголовок отзыва' />
                 <div className={styles.rating}>
                     <span>Оценка:</span>
                     <Controller 
                        control={control}
                        name='rating'
                        render={({ field }) => (
                            <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
                        )}
                     />
                 </div>
                 <Textarea {...register('description')} className={styles.description} placeholder='Текст отзыва' />
                 <div className={styles.submit}>
                     <Button appearence='primary'>Отправить</Button>
                     <span className={styles.info}>*Перед публикацией отзыв пройдет предварительную модерацию и проверку.</span>
                 </div>
             </div>
             <div className={styles.success}>
                 <div className={styles.successTitle}>Ваш отзыв успешно отправлен</div>
                 <div>
                     Спасибо, Ваш отзыв будет опубликован после проверки.
                 </div>
                 <CloseIcon className={styles.close}/>
             </div>
        </form>
    );
};
