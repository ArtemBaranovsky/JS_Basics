<?php
namespace app\rbac;

use yii\rbac\Rule;
use yii;
use yii\rbac\DbManager;

/**
 * Проверяем AdminID на соответствие с пользователем, переданным через параметры
 */
class AdminRule extends Rule
{
    public $name = 'isAdmin';

    /**
     * @param string|int $user the user ID.
     * @param Item $item the role or permission that this rule is associated width.
     * @param array $params parameters passed to AdminInterface::checkAccess().
     * @return bool a value indicating whether the rule permits the role or permission it is associated with.
     */
    public function execute($user, $item, $params)
    {
		// $auth = Yii::$app->authManager;
		// $authManager = Yii::$app->getAuthManager();
		// $dbMan = DbManager();
		$userRules = (new \yii\db\Query())
			->select(['item_name'])
			->from('auth_assignment')
			->where(['user_id' => $user])->all();
		// $permissions=$authManager->getPermissionsByUser($this->getUser()->id);
		// $check = $item['ruleName'];
		// echo "<pre>"; var_dump($userRules); echo "</pre>"; die();
		return ($userRules[0]["item_name"]==='admin') ? true : false;
    }
}