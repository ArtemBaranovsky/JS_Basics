<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\UserSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Список зарегистрированных пользователей';
$this->params['breadcrumbs'][] = $this->title;
$model=$dataProvider->getModels();
?>
<div class="user-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <p>
        <?//= Html::a('Create User', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            'id',
            'username',
            'email:email',
            'password_hash',
            'auth_key',
            //'confirmed_at',
            //'unconfirmed_email:email',
            //'blocked_at',
            //'registration_ip',
            //'created_at',
            //'updated_at',
            //'flags',
            //'last_login_at',
            //'status',
            //'avatar_filename',
            //'age',

            [
				'class' => 'yii\grid\ActionColumn',
				'template' => '{view} {delete}',
				'controller' => 'user',
				'visibleButtons' => [
					'delete' => function ($model) {
						return \Yii::$app->user->can('viewUserData') || Yii::$app->user->identity->attributes['id'] == $model->id; },
					'view' => function ($model) {
						return \Yii::$app->user->can('viewUserData') || Yii::$app->user->identity->attributes['id'] == $model->id; }					
				],
			],
        ],
    ]); ?>
</div>
