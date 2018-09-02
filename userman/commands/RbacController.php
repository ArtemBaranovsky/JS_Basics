<?php
// namespace console\controllers;
namespace app\commands;

use Yii;
use yii\console\Controller;
use common\components\rbac\UserRoleRule;

class RbacController extends Controller
{
    public function actionInit()
    {
        $auth = Yii::$app->authManager;

/*        // добавляем разрешение "viewUserData"
        $viewUserData = $auth->createPermission('viewUserData');
        $viewUserData->description = 'View user data';
        $auth->add($viewUserData);

        // добавляем разрешение "viewUserTable"
        $viewUserTable = $auth->createPermission('viewUserTable');
        $viewUserTable->description = 'View user table';
        $auth->add($viewUserTable);

        // добавляем роль "manager" и даём роли разрешение "viewUserTable"
        $manager = $auth->createRole('manager');
        $auth->add($manager);
        $auth->addChild($manager, $viewUserTable);

        // добавляем роль "admin" и даём роли разрешение "viewUserData"
        // а также все разрешения роли "manager"
        $admin = $auth->createRole('admin');
        $auth->add($admin);
        $auth->addChild($admin, $viewUserData);
        $auth->addChild($admin, $manager);

        // Назначение ролей пользователям. 1 и 2 это IDs возвращаемые IdentityInterface::getId()
        // обычно реализуемый в модели User.
        $auth->assign($manager, 2);
        $auth->assign($admin, 1);*/
		
/*         // add the rule ManagerRule
        $rule = new \app\rbac\ManagerRule;
        $auth->add($rule);

        // добавляем разрешение "viewUserData"
        $viewUserData = $auth->createPermission('viewUserData');
        $viewUserData->description = 'View user data';
        // $auth->add($viewUserData);
        // добавляем разрешение "viewUserTable" и привязываем к нему правило.
        $viewUserTable = $auth->createPermission('viewUserTable');
        $viewUserTable->description = 'View user table';
        $viewUserTable->ruleName = $rule->name;
        // $auth->add($viewUserTable);

        // "viewUserTable" будет использоваться из "viewUserData"
        $auth->addChild($viewUserTable, $viewUserData);

        // разрешаем "менеджеру" смотреть информацию о себе
        $auth->addChild($manager, $viewUserTable);  */


        // $admin = $auth->createRole('admin');
        // $auth->assign($admin, 1);

		// add the rule AdminRule
        $rule = new \app\rbac\AdminRule;
        $auth->add($rule);        
        $admin = $auth->createRole('admin');
        // $auth->add($admin);

        // добавляем разрешение "viewUserData"
        $viewUserData = $auth->createPermission('viewUserData');
        $viewUserData->description = 'viewUserData';
        $viewUserData->ruleName = $rule->name;
        // $auth->add($viewUserData);

        // добавляем разрешение "viewUserTable" и привязываем к нему правило.
        $viewUserTable = $auth->createPermission('viewUserTable');
        $viewUserTable->description = 'View user table';
        $viewUserTable->ruleName = $rule->name;
        // $auth->add($viewUserTable);

        // разрешаем "админу" смотреть информацию о менеджерах
        $auth->addChild($admin, $viewUserData); 


// add the rule
/*$rule = new \app\rbac\AdminRule;
$auth->add($rule);

// äîáàâëÿåì ðàçðåøåíèå "updateOwnPost" è ïðèâÿçûâàåì ê íåìó ïðàâèëî.
$updateOwnPost = $auth->createPermission('updateOwnPost');
$updateOwnPost->description = 'Update own post';
$updateOwnPost->ruleName = $rule->name;
$auth->add($updateOwnPost);

// "updateOwnPost" áóäåò èñïîëüçîâàòüñÿ èç "updatePost"
$auth->addChild($updateOwnPost, $updatePost);

// ðàçðåøàåì "àâòîðó" îáíîâëÿòü åãî ïîñòû
$auth->addChild($manager, $updateOwnPost);

*/		}
}