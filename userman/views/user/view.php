<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\web\Session;
// use yii\web\User;

/* @var $this yii\web\View */
/* @var $model app\models\User */

$this->title = "Пользователь №".$model->id.' ('.$model->username.')';
$this->params['breadcrumbs'][] = ['label' => 'Пользователи', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
$session = Yii::$app->session;
?>
<div class="user-view">

    <h1><?= Html::encode($this->title) ?></h1>
    <? if (
        (\Yii::$app->user->can('viewUserData', ['user' => $model->id])) 
            || (\Yii::$app->user->identity->attributes['id'] == $model->id) 
            ) {?>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'username',
            'email:email',
            'password_hash',
            'auth_key',
            'confirmed_at',
            'unconfirmed_email:email',
            'blocked_at',
            'registration_ip',
            'created_at',
            'updated_at',
            'flags',
            'last_login_at',
            'status',
            'avatar_filename',
            'age',
        ],
     ]);
    } else { 
        $session->setFlash('alert', 'Извините, Вы не имеете права просматривать данную страницу.'); 
        }
        ?>

    

</div>
    <p><?=$session->getFlash('alert') ?><br></p>