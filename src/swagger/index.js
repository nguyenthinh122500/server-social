/**
 * @swagger
 * securityDefinitions:
 *   BearerAuth:
 *     type: apiKey
 *     in: header
 *     name: Authorization
 * 
 * security:
 *   - BearerAuth: []
 */


/**
 * @swagger
 * /api/v1/posts/getlistposts:
 *   get:
 *     summary: Get List Posts
 *     tags: [Posts]
 *     description: Get List Posts
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: Internal server error
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token 
 *         required: true
 *         type: string
 *     examples:
 *       'application/json':
 *         Authorization: Bearer YOUR_TOKEN_HERE
 */


/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register User
 *     description: Register a new user.
 *     tags: [Auth]
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         type: string
 *         examples:
 *           'application/json':
 *             value: Bearer YOUR_TOKEN_HERE
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             fullName:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Fail
 */
