{*<?php exit();?>*}
<div class="block">
	<div class="head"><span>{$lang.edit_article}</span></div>
	<div class="main">
		<form id="form_edit_art" method="post" action="{url channel=$global.channel}">
			<input name="cmd" type="hidden" value="add_or_edit_article" />
			<input name="art_id" type="hidden" value="{$global.id}" />
			<table class="table">
				<tr>
					<td width="100px">{$lang.article_title}：</td>
					<td><input name="art_title" type="text" class="text" maxlength="200" value="{$article.art_title}" /></td>
				</tr>
				<tr>
					<td>{$lang.article_cat}：</td>
					<td>
						<select name="art_cat_id">
							<option value="0">{$lang.please_select}</option>
							{foreach from=$cat_list name=cat_list item=item}
							<option value="{$item.cat_id}" {if $item.cat_id == $article.art_cat_id}selected="selected"{/if}>{section name=loop loop=$item.grade - 1}&nbsp;{/section}{$item.cat_name}</option>
							{/foreach}
						</select>
					</td>
				</tr>
				<tr>
					<td>{$lang.author}：</td>
					<td><input name="art_author" type="text" class="text" maxlength="" value="{$article.art_author}" /></td>
				</tr>
				<tr>
					<td>{$lang.article_text}：</td>
					<td>
						<div class="editor">
							{include file='module/editor.php'}
						</div>
					</td>
				</tr>
				<tr>
					<td>{$lang.keywords}：</td>
					<td><input class="text" name="art_keywords" type="text" maxlength="200" value="{$article.art_keywords}" />
					</td>
				</tr>
				<tr>
					<td>{$lang.description}：</td>
					<td><input class="text" name="art_description" type="text" value="{$article.art_description}" /></td>
				</tr>
				<tr>
					<td colspan="2">
						<div class="bt_row">
							<input class="button" type="submit" value="{$lang.edit}" />
							<input class="button" type="button" onclick="go_back()" value="{$lang.go_back}" />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>
</div>
